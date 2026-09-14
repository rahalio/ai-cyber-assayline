const API_BASE = import.meta.env.VITE_API_BASE ?? '';

export type ApiClientOptions = {
  signal?: AbortSignal;
  headers?: Record<string, string>;
};

async function request<T>(
  method: string,
  url: string,
  body?: unknown,
  options?: ApiClientOptions,
): Promise<{ data: T }> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'X-API-Key': import.meta.env.VITE_API_KEY ?? 'assayline_demo_local_dev_key',
    ...(options?.headers ?? {}),
  };
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  const res = await fetch(`${API_BASE}${url}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: options?.signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${method} ${url} failed: ${res.status} ${text}`);
  }

  if (res.status === 204) return { data: undefined as T };
  const json = await res.json();
  return { data: json?.data !== undefined ? json.data : json };
}

export const apiClient = {
  get: <T>(url: string, options?: ApiClientOptions) => request<T>('GET', url, undefined, options),
  post: <T>(url: string, body?: unknown, options?: ApiClientOptions) =>
    request<T>('POST', url, body, options),
  put: <T>(url: string, body?: unknown, options?: ApiClientOptions) =>
    request<T>('PUT', url, body, options),
  patch: <T>(url: string, body?: unknown, options?: ApiClientOptions) =>
    request<T>('PATCH', url, body, options),
  delete: <T>(url: string, options?: ApiClientOptions) =>
    request<T>('DELETE', url, undefined, options),
};
