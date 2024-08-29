async function lazyImportDomAnimation() {
	const domAnimation = (await import('@/lib/framer-motion/dom-animation'))?.default

	return domAnimation
}

async function lazyImportDomMax() {
	const domMax = (await import('@/lib/framer-motion/dom-max'))?.default

	return domMax
}

export { lazyImportDomAnimation, lazyImportDomMax }
