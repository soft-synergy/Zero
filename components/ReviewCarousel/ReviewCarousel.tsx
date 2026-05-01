'use client'
import { useEffect, useState, useRef } from 'react'
import styles from './ReviewCarousel.module.css'
import type { Review } from '@/lib/reviews-data'

function StarRow({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

export default function ReviewCarousel({ reviews }: { reviews?: Review[] }) {
  const items = reviews && reviews.length > 0 ? reviews : []
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (items.length <= 1) return

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length)
    }, 2000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [items.length])

  if (items.length === 0) return null

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((review, i) => (
            <div key={i} className={styles.slide}>
              <div className={styles.card}>
                {/* Header: avatar + name + Trustpilot */}
                <div className={styles.cardTop}>
                  <div className={styles.reviewer}>
                    <img
                      className={styles.avatar}
                      src={review.photo}
                      alt={review.name}
                      width={44}
                      height={44}
                    />
                    <span className={styles.reviewerName}>{review.name}</span>
                  </div>
                  <div className={styles.trustpilot}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#00B67A">
                      <path d="M12 2l2.9 8.9H23l-7.4 5.4 2.8 8.9L12 20l-6.4 4.6 2.8-8.9L1 10.9h8.1z" />
                    </svg>
                    <span className={styles.tpLabel}>Trustpilot</span>
                  </div>
                </div>

                {/* Stars */}
                <StarRow count={review.stars} />

                {/* Title (bold, quoted) */}
                {review.title && (
                  <p className={styles.title}>&ldquo;{review.title}&rdquo;</p>
                )}

                {/* Review body text */}
                <p className={styles.body}>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {items.length > 1 && (
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
