export enum FiltersEnum {
    ALL = 'ALL',
    TODAY = 'TODAY',
    TOMORROW = 'TOMORROW',
    THIS_WEEK = 'THIS_WEEK',
    NEXT_WEEK = 'NEXT_WEEK',
    THIS_MONTH = 'THIS_MONTH',
}

export const filters:Record<FiltersEnum, string> = {
    [FiltersEnum.ALL]: 'All',
    [FiltersEnum.TODAY]: 'Today',
    [FiltersEnum.TOMORROW]: 'Tomorrow',
    [FiltersEnum.THIS_WEEK]: 'This week',
    [FiltersEnum.NEXT_WEEK]: 'Next week',
    [FiltersEnum.THIS_MONTH]: 'This month',
}



