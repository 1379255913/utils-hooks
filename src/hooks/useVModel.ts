import type { Emit } from '@/types/vue'
import { getCurrentInstance, ref,type UnwrapRef, watch } from 'vue'

export function useVModel<P extends object, K extends keyof P>(props: P, key?: K, emit?: Emit ) {
  const vm = getCurrentInstance()
  const _emit = emit || vm?.emit
  if (!key) {
    key = 'modelValue' as K
  }
  const event = `update:${String(key)}`
  const proxy = ref(props[key])
  watch(
    () => props[key!],
    (v) => (proxy.value = v as UnwrapRef<P[K]>),
  );
  watch(
    () => proxy.value,
    (v) => {
      if (v !== props[key!]) {
        _emit!(event, v);
      }
    },
  );
  return proxy
}
