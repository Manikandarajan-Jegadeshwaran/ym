export const setState = (state: any, member: any, action: any) => ({
    ...state,
    [member]: action?.payload
});
