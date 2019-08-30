# IglooReloaded

VSCode extension to modify ServiceNow scripts directly from VSCode.

## Features

- Tracks modified files locally
- Warns before overwriting files that may have been modified by someone else
- Supports following files:
  - Server Development
    - Business Rules
    - Schedule Scripts
    - Script Includes
    - UI Actions
    - Processors
    - Scheduled Script Executions
    - Script Action
    - Fix Script
  - Client Development
    - Client Scripts
    - UI Scripts
  - Forms & UI
    - UI Pages (including the processing script, client script and HTML)
    - UI Macros
  - Inbound Integrations
    - Transform Maps (including transform scripts)
    - Scripted REST Resources
  - MID Server
    - MID Server Script Includes
    - MID Server Script Files
  - Service Catalog
    - Record Producer
    - Catalog Client Script
  - Content Management
    - Content Blocks - Programmatic

## How-to

1. Create an empty folder with a file named `iglooconfig.txt` inside it with the
   following content:
```
{
    "url" : "<Instance URL>",
    "username" : "<Instance username>",
    "password" : "<Instance password>",
    "app_name" : "<Name of you application>",
    "track_changes": true
}
```
2. Open the folder in VSCode and wait unitil statusbar displays the message
   `IglooReloaded: Active`.
3. Press `Ctrl + Alt + a` to fetch all scripts from ServiceNow.


## Shortcuts

| Shortcut         | Action                                     |
|------------------|--------------------------------------------|
| `Ctrl + Alt + a` | Import all files from ServiceNow           |
| `Ctrl + Alt + i` | Import currently open file from ServiceNow |
| `Ctrl + Alt + e` | Export currently open file to ServiceNow   |
| `Ctrl + Alt + d` | Compare local and remote files             |

## In Progress

- Auto completions

## Credits
- Icons made by [Vignesh Oviyan](https://www.flaticon.com/authors/vignesh-oviyan) from [Flaticon](https://www.flaticon.com/)

## License
- &copy; Nijraj Gelani