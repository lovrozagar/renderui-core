const HTML_OBSERVER_OPTIONS = {
  attributes: true,
  attributeFilter: ['class'],
}

const GLOBAL_NO_TRANSITION_CLASSNAMES = [
  '[&_*:not(.mode-change-transition-exception)]:!duration-0',
  '[&_*:before:not(.mode-change-transition-exception)]:!duration-0',
  '[&_*:after:not(.mode-change-transition-exception)]:!duration-0',
] as const

const GLOBAL_NO_TRANSITION_CLASSNAME = GLOBAL_NO_TRANSITION_CLASSNAMES.join(' ')

export { HTML_OBSERVER_OPTIONS, GLOBAL_NO_TRANSITION_CLASSNAMES, GLOBAL_NO_TRANSITION_CLASSNAME }
