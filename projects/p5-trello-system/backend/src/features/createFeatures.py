import os

# Base folder where structure will be created
BASE_DIR = "src"

# Entities (DDD modules)
entities = [
    "user",
    "board",
    "member",
    "list",
    "card",
    "label",
    "comment"
]

# Files to create inside each entity folder
files = [
    "model.js",
    "repository.js",
    "service.js",
    "controller.js",
    "routes.js",
    "validation.js"
]


def create_structure():
    for entity in entities:
        # Create entity folder
        entity_path = os.path.join(BASE_DIR, entity)
        os.makedirs(entity_path, exist_ok=True)

        # Create files inside entity folder
        for file in files:
            file_path = os.path.join(entity_path, f"{entity}.{file}")
            
            # Create empty file if not exists
            if not os.path.exists(file_path):
                open(file_path, "w").close()

    print("✅ Folder & file structure created successfully!")


if __name__ == "__main__":
    create_structure()