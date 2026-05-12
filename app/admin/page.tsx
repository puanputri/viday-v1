'use client'

import { useState } from 'react'
import { getJavaContent, saveJavaContent } from './actions'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [content, setContent] = useState('')
  const [sha, setSha] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleUnlock() {
    setStatus('loading')
    setMessage('')
    try {
      const result = await getJavaContent(password)
      setContent(result.content)
      setSha(result.sha)
      setUnlocked(true)
      setStatus('idle')
    } catch {
      setStatus('error')
      setMessage('Wrong password or failed to connect.')
    }
  }

  async function handleSave() {
    setStatus('loading')
    setMessage('')
    try {
      await saveJavaContent(password, content, sha)
      setStatus('success')
      setMessage('Saved. Vercel will redeploy in ~1 minute.')
    } catch {
      setStatus('error')
      setMessage('Failed to save. Try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10">
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase">Admin</span>
          <h1 className="mt-1 text-3xl font-bold text-white">
            <GradientText>Content Editor</GradientText>
          </h1>
        </div>

        {!unlocked ? (
          <GlassCard className="p-6">
            <p className="mb-4 font-mono text-xs tracking-widest text-white/35 uppercase">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
              placeholder="Enter admin password"
              className="mb-4 w-full rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-sm text-white/70 outline-none focus:border-violet-400/40"
            />
            <button
              onClick={handleUnlock}
              disabled={status === 'loading'}
              className="rounded-md bg-violet-500/20 px-4 py-2 font-mono text-sm text-violet-300 transition hover:bg-violet-500/30 disabled:opacity-50"
            >
              {status === 'loading' ? 'Unlocking...' : 'Unlock'}
            </button>
            {status === 'error' && (
              <p className="mt-3 font-mono text-xs text-red-400">{message}</p>
            )}
          </GlassCard>
        ) : (
          <GlassCard className="p-6">
            <p className="mb-3 font-mono text-xs tracking-widest text-white/35 uppercase">Java — Definition</p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="mb-4 w-full resize-y rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-sm text-white/70 outline-none focus:border-violet-400/40"
            />
            <div className="flex items-center gap-3">
              <button
                onClick={handleSave}
                disabled={status === 'loading'}
                className="rounded-md bg-violet-500/20 px-4 py-2 font-mono text-sm text-violet-300 transition hover:bg-violet-500/30 disabled:opacity-50"
              >
                {status === 'loading' ? 'Saving...' : 'Save'}
              </button>
              {status === 'success' && (
                <p className="font-mono text-xs text-emerald-400">{message}</p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs text-red-400">{message}</p>
              )}
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  )
}
