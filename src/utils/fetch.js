export function get(path: string) {
  return fetch(path, {
    method: 'GET',
    credentials: 'same-origin',
    cache: 'no-store',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  });
}

export function post(path: string, data: mixed): Promise<Response> {
  return fetch(path, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });
}

export function del(path: string): Promise<Response> {
  return fetch(path, {
    method: 'DELETE',
    credentials: 'same-origin',
    cache: 'no-store',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  });
}

export function put(path: string, data: mixed): Promise<Response> {
  return fetch(path, {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });
}

export function parseRequest(response: Response): Promise<TResponse> {
  if (!response.ok) {
    return Promise.resolve({ err: 'Oops, something went wrong!' });
  }

  if (response.headers.get('Content-Type') === 'application/json') {
    return response.json().then(data => ({ res: data }), () => ({ err: 'Not valid JSON!' }));
  }

  return Promise.resolve({ res: response.text() });
}

export function parseAsArrayBuffer(response: Response): Promise<TResponse> {
  if (!response.ok) {
    return Promise.resolve({ err: 'Oops, something went wrong!' });
  }

  return Promise.resolve({ res: response.arrayBuffer() });
}
