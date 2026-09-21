import zipfile
import xml.etree.ElementTree as ET

path = r'd:\Projects\Personal\slatch-pharmaceuticals\public\About Slatch Pharmaceuticals®-.docx'

with zipfile.ZipFile(path) as z:
    root = ET.fromstring(z.read('word/document.xml'))

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
for p in root.findall('.//w:p', ns):
    text = ''.join((t.text or '') for t in p.findall('.//w:t', ns))
    if text:
        print(text)
