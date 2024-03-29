# Obsidian Plugin for Clearing Unused Images Plus

This plugin helps you to keep your vault clean by deleting the images you are not referencing in your markdown notes anymore.

The plugin simply gets all of your image links from all the markdown documents and compares these images with all image files you have available in your vault.

In case any of these image files are not referenced in any document of the vault, they will be automatically deleted.

## Settings

### Deleted Image Destination

Please make sure that you select the destination for the deleted images under "Clear Unused Images Plus Settings" tab. You have 3 options:

<img src="https://github.com/xjl456852/ob-clear-unused-images-plus/blob/master/images/delete-destination.png?raw=true">

1. **Move to Obsidian Trash** - Files are going to be moved to the `.trash` under the Obsidian Vault.

2. **Move to System Trash** - Files are going to be moved to the Operating System trash.

3. **Permanently Delete** - Files are going to be destroyed permanently. You won't beable to revert back.

### Excluded Folders

You can exclude folders, from which you don't want images to be removed during the scan. In case there are multiple folders to be excluded, you can divide them by comma. Please ensure you provide the full path in Vault:

<img src="https://github.com/xjl456852/ob-clear-unused-images-plus/blob/master/images/excluded-folders.png?raw=true">

You can now exclude all subfolders under the folder paths provided above:

<img src="https://github.com/xjl456852/ob-clear-unused-images-plus/blob/master/images/exclude-subfolders.png?raw=true">

## How to use

1. Activate the plugin from Community Plugins

2. You can either:

    - Activate the Ribbon Icon from plugin settings and click Icon from Left Ribbon for running the clean up:

    <img src="https://github.com/xjl456852/ob-clear-unused-images-plus/raw/master/images/ribbon-icon.png">

    - Or use Ribbon Icon or Open Command Palette (Using `Ctrl/Cmd + P` or from Ribbon) Run "Clear Unused Images Plus".

    <img src="https://github.com/xjl456852/ob-clear-unused-images-plus/raw/master/images/Clear-Command.png">

3. If you have turned on "Delete Logs" option in plugin settings, you will see a modal popping up with an information which images are deleted from your vault:

<img src="https://github.com/xjl456852/ob-clear-unused-images-plus/raw/master/images/logs-modal.png">

In case all images are used, you will see communication as below:

<img src="https://github.com/xjl456852/ob-clear-unused-images-plus/raw/master/images/nothing-deleted.png">

**Scanned Image Formats** : jpg, jpeg, png, gif, svg, bmp, webp, tiff, heic, raw

## Planned Features

-   [x] Creating settings for users to select the destination of the deleted files
-   [x] Excluded folders settings for the scan
-   [ ] Images to be cleaned during load of the vault if users chooses.
-   [ ] Images to be cleaned every X minutes depending on user's choice

## Support

If you are enjoying the plugin then you can support my work and enthusiasm by buying me a coffee:

![support me](https://github.com/xjl456852/public_resources/blob/aca24ede4acf372e3ef5fb49f5791c10ee6f7060/support_me.png)

<a href='https://www.buymeacoffee.com/xiejl' target='_blank'>
    <img src='https://img.buymeacoffee.com/button-api/?text=Buy me a coffee &emoji=&slug=Xiejl&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00' alt='Buy Me a Coffee' />
</a>