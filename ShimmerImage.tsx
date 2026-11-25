import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface ShimmerImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  forceLoading?: boolean;
}

export const ShimmerImage: React.FC<ShimmerImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden',
  loading = 'lazy',
  forceLoading = false,
}) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    setStatus('loading');
  }, [src]);

  const showShimmer = forceLoading || status === 'loading';

  return (
    <div className={containerClassName}>
      {showShimmer && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 skeleton-shimmer"
        />
      )}

      {status === 'error' && !forceLoading ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
          <ImageOff className="w-5 h-5 opacity-60" />
          <span className="text-xs font-medium line-clamp-2 max-w-[200px]">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`${className} transition-opacity duration-300 ${
            showShimmer ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
    </div>
  );
};
