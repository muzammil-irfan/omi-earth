from PIL import Image
import os
import shutil

def resize_and_move_images(input_directory, output_directory, target_width=480):
    # Ensure the output directory exists, or create it
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Loop through all files in the input directory
    for filename in os.listdir(input_directory):
        input_path = os.path.join(input_directory, filename)

        # Check if the file is an image (you might want to enhance this check)
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
            # Open the original image
            original_img = Image.open(input_path)

            # Get original dimensions
            original_width, original_height = original_img.size

            # Resize the image to the target width
            target_height = int((target_width / float(original_width)) * float(original_height))
            resized_img = original_img.resize((target_width, target_height), Image.ANTIALIAS)

            # Save the resized image with a webp extension to the output directory
            output_path = os.path.join(output_directory, f"{os.path.splitext(filename)[0]}.webp")
            resized_img.save(output_path, 'webp')

            # Get resized dimensions
            resized_width, resized_height = resized_img.size

            # Print dimensions for verification
            print(f"{filename}: Original Dimensions: {original_width}x{original_height}, Resized Dimensions: {resized_width}x{resized_height}")

            # Copy the original image to the output directory
            shutil.copy(input_path, os.path.join(output_directory, filename))

    print(f"All images resized and copied to {output_directory}")

# Replace 'input_directory' with the path to your original images directory
input_directory = r'C:\Users\muzam\Desktop\Work\azeem\omi-earth\src\assets\webp'

# Replace 'output_directory' with the path to the new 'mobile' directory
output_directory = r'C:\Users\muzam\Desktop\Work\azeem\omi-earth\src\assets\webp\mobile'

# Resize images to a width of 480 pixels
resize_and_move_images(input_directory, output_directory)
