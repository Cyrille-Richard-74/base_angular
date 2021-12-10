export interface PaginationInterface {

    // Endpoint / Base URL
    endpoint: string;

    // Current page
    page: number;

    // Total of pages
    pages: number;

    // Range of items per page
    itemsPerPage: number;

    // Total Items
    totalItems: number;

}