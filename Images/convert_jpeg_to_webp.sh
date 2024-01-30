#!/bin/bash

# Recursive function to traverse directories
convert_jpeg_to_webp_recursive() {
    local dir="$1"
    local file

    # Loop through files and directories in the current directory
    for file in "$dir"/*; do
        if [ -d "$file" ]; then
            # If the item is a directory, call the function recursively
            convert_jpeg_to_webp_recursive "$file"
        elif [ -f "$file" ] && { [[ "$file" == *.jpg ]] || [[ "$file" == *.jpeg ]]; }; then
            # If the item is a JPEG file, convert it to WebP format
            filename=$(basename "$file")
            cwebp "$file" -o "${file%.*}.webp"
            echo "Converted $file to ${file%.*}.webp"
        fi
    done
}

# Start the recursive conversion from the current directory
convert_jpeg_to_webp_recursive "$(pwd)"
