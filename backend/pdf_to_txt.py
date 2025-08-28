import pdfplumber
import os

input_dir = "pdf_docs"          # Folder with all your PDFs
output_dir = "converted_txt"    # Output folder for .txt files

os.makedirs(output_dir, exist_ok=True)

for filename in os.listdir(input_dir):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(input_dir, filename)
        txt_path = os.path.join(output_dir, filename.replace(".pdf", ".txt"))

        with pdfplumber.open(pdf_path) as pdf:
            full_text = ""
            for page in pdf.pages:
                text = page.extract_text()
                full_text += (text or "") + "\n\n"  # Add spacing between pages

        with open(txt_path, "w") as f:
            f.write(full_text)

        print(f"✅ Converted: {filename} → {txt_path}")
