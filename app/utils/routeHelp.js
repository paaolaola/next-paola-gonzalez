export const formatCategoryForURL = (category) => {
    return category.replace(/\s+/g, '-').toLowerCase();
};

export const parseCategoryFromURL = (category) => {
    return category.replace(/-/g, ' ');
};