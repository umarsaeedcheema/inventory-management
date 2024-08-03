# Inventory Management

A simple inventory management system that allows users to add, remove, and update items in an inventory. The system also allows users to view the inventory and search for items in the inventory.

## Installation

1. Clone the repository

```bash
git clone https://github.com/umarsaeedcheema/inventory-management.git
```

2. Run the following command to install the required dependencies:

```bash
npm install
```

## Usage

Run the following command to start the application:

```bash
npm start
```

## Structure

The project is structured as follows:

```/app
  /components
    - layout.tsx
    - protected-layout.tsx
    - navbar.tsx
    /inventory
      - inventory-service.ts
      - page.tsx
    /login
      - authContext.tsx
      - page.tsx
  layout.tsx
  page.tsx
```

## License

## Features

### Completed

- [x] Add item
- [x] Delete item
- [x] Update item
- [x] User authentication

### In Progress

- [ ] Database management for multiple users
- [ ] Inventory search functionality
- [ ] Recipe Suggestion
- [ ] Low stock alerts
- [ ] Item categorization

### Future

- [ ] Item quantity tracking
- [ ] Reporting and analytics
- [ ] Batch and expiration date tracking
- [ ] Import/export inventory data

MIT
