'use server'

const REPO_OWNER = 'puanputri'
const REPO_NAME = 'viday-v1'
const CONTENT_PATH = 'content/stack/java.json'

function checkPassword(password: string) {
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    throw new Error('Unauthorized')
  }
}

export async function getJavaContent(password: string): Promise<{ content: string; sha: string }> {
  checkPassword(password)
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
      cache: 'no-store',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch content')
  const data = await res.json()
  const decoded = JSON.parse(Buffer.from(data.content, 'base64').toString('utf-8'))
  return { content: decoded.content, sha: data.sha }
}

export async function saveJavaContent(password: string, content: string, sha: string): Promise<void> {
  checkPassword(password)
  const encoded = Buffer.from(JSON.stringify({ content }, null, 2)).toString('base64')
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'update Java definition content via admin',
        content: encoded,
        sha,
      }),
    }
  )
  if (!res.ok) throw new Error('Failed to save content')
}
