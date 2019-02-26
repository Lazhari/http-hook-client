export default class UseApiResponse<T> {
    isLoading: boolean = false;
    data: T | null = null;
    error: string = '';
}
