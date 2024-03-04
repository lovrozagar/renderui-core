async function lazyImportDomAnimation() {
  const { domAnimation } = await import('@/lib/framer-motion/dom-animation')

  return domAnimation
}

async function lazyImportDomMax() {
  const { domMax } = await import('@/lib/framer-motion/dom-max')

  return domMax
}

export { lazyImportDomAnimation, lazyImportDomMax }
