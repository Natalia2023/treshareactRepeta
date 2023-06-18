


import { format } from 'date-fns';

export const formatEventSrart = start => {
    return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};
