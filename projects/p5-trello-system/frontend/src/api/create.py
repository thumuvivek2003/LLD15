import os

# Base directory
base_dir = "src/api"

# List of files to create
files = [
    "client.js",
    "user.api.js",
    "board.api.js",
    "list.api.js",
    "card.api.js",
    "comment.api.js",
    "label.api.js",
    "member.api.js"
]

def create_structure():
    # Create directories if they don't exist
    os.makedirs(base_dir, exist_ok=True)

    # Create files
    for file in files:
        file_path = os.path.join(base_dir, file)
        if not os.path.exists(file_path):
            with open(file_path, "w") as f:
                pass  # create empty file
            print(f"Created: {file_path}")
        else:
            print(f"Already exists: {file_path}")

if __name__ == "__main__":
    create_structure()