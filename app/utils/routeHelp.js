export const formatCategoryForURL = (category) => {
    return category.replace(/\s+/g, '-').toLowerCase();
};

export const parseCategoryFromURL = (category) => {
    return category.replace(/-/g, ' ');
};
export const formatSubCategoryForURL = (subcategory) => {
    return subcategory.replace(/\s+/g, '-').toLowerCase();
};

export const parseSubCategoryFromURL = (subcategory) => {
    return subcategory.replace(/-/g, ' ');
};