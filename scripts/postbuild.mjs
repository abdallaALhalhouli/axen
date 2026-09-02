import fs from 'node:fs'
import path from 'node:path'

const outDir = path.resolve(process.cwd(), 'out')

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      processDirectory(fullPath)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      patchHtmlFile(fullPath)
    }
  }
}

function patchHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const relPath = path.relative(outDir, filePath).replace(/\\/g, '/')
  const isArabic = relPath.startsWith('ar.') || relPath.startsWith('ar/')

  if (isArabic) {
    // Replace <html ... lang="en" ...> with <html ... lang="ar" dir="rtl" ...>
    content = content.replace(/<html([^>]*)lang=["']en["']([^>]*)>/i, (match, p1, p2) => {
      const clean = (p1 + p2).replace(/\s*dir=["'][^"']*["']/gi, '')
      return `<html${clean} lang="ar" dir="rtl">`
    })
    if (!content.includes('lang="ar"')) {
      content = content.replace(/<html([^>]*)>/i, '<html$1 lang="ar" dir="rtl">')
    }
  } else {
    // Ensure English files have dir="ltr"
    content = content.replace(/<html([^>]*)lang=["']en["']([^>]*)>/i, (match, p1, p2) => {
      const clean = (p1 + p2).replace(/\s*dir=["'][^"']*["']/gi, '')
      return `<html${clean} lang="en" dir="ltr">`
    })
  }

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`[postbuild] Patched ${relPath} -> ${isArabic ? 'lang="ar" dir="rtl"' : 'lang="en" dir="ltr"'}`)
}

processDirectory(outDir)
