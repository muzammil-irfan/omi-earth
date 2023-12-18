from PIL import Image
import os

def convert_to_webp(input_path, output_path):
    try:
        # Open the image file
        img = Image.open(input_path)

        # Save as WebP
        img.save(output_path, 'webp')

        print(f"Conversion successful! WebP image saved at: {output_path}")

    except Exception as e:
        print(f"Error converting image: {e}")

def convert_all_in_directory(input_directory, output_directory):
    # Ensure output directory exists
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Iterate through all files in the input directory
    for filename in os.listdir(input_directory):
        if filename.endswith('.png'):
            input_path = os.path.join(input_directory, filename)
            output_path = os.path.join(output_directory, os.path.splitext(filename)[0] + '.webp')

            convert_to_webp(input_path, output_path)


# Replace 'input_directory' and 'output_directory' with your directory paths
input_directory = r'C:\Users\muzam\Desktop\Work\azeem\omi-earth\src\assets'
output_directory = r'C:\Users\muzam\Desktop\Work\azeem\omi-earth\src\assets\webp'

convert_all_in_directory(input_directory, output_directory)
