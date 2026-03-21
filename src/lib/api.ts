// WordPress WPGraphQL クライアント

const API_URL = process.env.WORDPRESS_API_URL

if (!API_URL) {
  throw new Error('WORDPRESS_API_URL が設定されていません')
}

export async function fetchAPI<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error('WPGraphQL エラー:', json.errors)
    throw new Error('GraphQL クエリでエラーが発生しました')
  }

  return json.data as T
}
