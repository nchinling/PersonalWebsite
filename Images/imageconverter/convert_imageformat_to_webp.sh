#!/bin/bash

# Recursive function to traverse directories
convert_imageformat_to_webp() {
    local original_format="$1"
    local dir="$2"
    local file

    # Loop through files and directories in the current directory
    for file in "$dir"/*; do
        if [ -d "$file" ]; then
            # If the item is a directory, call the function recursively
            convert_imageformat_to_webp "$file" "$original_format"
        elif [ -f "$file" ] && { [[ "$file" == *".$original_format" ]]; }; then
            # If the item is a JPEG file, convert it to WebP format
            filename=$(basename "$file")
            cwebp "$file" -o "${file%.*}.webp"
            echo "Converted $file to ${file%.*}.webp"
        fi
    done
}

# Start the recursive conversion from the current directory
convert_imageformat_to_webp "$1" "$(pwd)" 
