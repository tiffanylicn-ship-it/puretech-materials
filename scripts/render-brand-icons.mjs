import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const source = path.join(root, 'design/puretech-favicon.svg')
const appDir = path.join(root, 'src/app')

await fs.mkdir(appDir, { recursive: true })

const icon512 = await sharp(source).resize(512, 512).png({ compressionLevel: 9 }).toBuffer()
const icon180 = await sharp(source).resize(180, 180).png({ compressionLevel: 9 }).toBuffer()
const icon32 = await sharp(source).resize(32, 32).png({ compressionLevel: 9 }).toBuffer()

await fs.writeFile(path.join(appDir, 'icon.png'), icon512)
await fs.writeFile(path.join(appDir, 'apple-icon.png'), icon180)

const icoHeader = Buffer.alloc(6)
icoHeader.writeUInt16LE(0, 0)
icoHeader.writeUInt16LE(1, 2)
icoHeader.writeUInt16LE(1, 4)

const icoEntry = Buffer.alloc(16)
icoEntry.writeUInt8(32, 0)
icoEntry.writeUInt8(32, 1)
icoEntry.writeUInt8(0, 2)
icoEntry.writeUInt8(0, 3)
icoEntry.writeUInt16LE(1, 4)
icoEntry.writeUInt16LE(32, 6)
icoEntry.writeUInt32LE(icon32.length, 8)
icoEntry.writeUInt32LE(22, 12)

await fs.writeFile(path.join(appDir, 'favicon.ico'), Buffer.concat([icoHeader, icoEntry, icon32]))

console.log('Rendered favicon.ico, icon.png and apple-icon.png from the PURETECHMATERIALS brand mark.')
