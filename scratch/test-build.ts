
import { buildPaywallCopy } from './lib/admin/translation-source'
import { COPY, type Copy } from './lib/paywall-copy'

const testCopy = buildPaywallCopy({})
console.log('Build successful')
