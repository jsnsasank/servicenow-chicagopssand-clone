# servicenow-chicagopssand-clone
Clone of ServiceNow chicagopssand sandbox instance - configurations, scripts, and customizations

## Overview

This repository contains exported configurations, scripts, and customizations from the ServiceNow chicagopssand sandbox instance. This clone serves as version control and backup for custom development work.

## Instance Information

- **Instance URL**: chicagopssand.service-now.com
- **Instance Type**: Sandbox/Development
- **Created**: December 2025

## Repository Structure

```
/business-rules/     - Custom business rules
/client-scripts/     - Client-side scripts
/script-includes/    - Script includes and utilities
/ui-policies/        - UI policies and actions
/workflows/          - Flow Designer workflows
/update-sets/        - Exported update sets
/tables/             - Custom table definitions
/documentation/      - Technical documentation
```

## Key Customizations

### Business Rules
- **Save SelectAssets to Transfer Order Line** - Transfer Order customization
- **Transfer Order Flow Trigger** - Flow automation trigger
- **Transfer Order Line Flow Trigger** - Line-level flow trigger
- **Update student close contacts** - Contact management
- **Update staff close contacts** - Staff contact updates
- **Update monitoring date** - Date tracking automation

### Custom Tables
- Transfer Order [alm_transfer_order]
- Transfer Order Line [alm_transfer_order_line]
- Potential Contact [x_chps_ctrace_potential_contact]
- Contact Tracing [x_chps_ctrace_contact_tracing]

## Export Instructions

### Exporting Update Sets
1. Navigate to System Update Sets > Retrieved Update Sets
2. Select the update set to export
3. Click "Export to XML"
4. Save to `/update-sets/` directory

### Exporting Individual Scripts
1. Navigate to the script record
2. Copy script content
3. Save as .js file in appropriate directory
4. Include metadata in file header

## Version Control

All changes should be documented with:
- Date of change
- Author
- Purpose/reason for change
- Related update set name

## Notes

- This is a working development instance
- Always test changes in this sandbox before production
- Update sets should be peer-reviewed before commit
- Keep update sets focused and atomic

## Contact

Maintained by: SNJuluru
