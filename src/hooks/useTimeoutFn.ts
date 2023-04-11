import type { MaybeRef } from '@/types/vue'
import { readonly, ref, unref } from 'vue'
import type { FunctionArgs } from '@/types/function'

export function useTimeoutFn<T extends FunctionArgs>(
  cb: T, // 回调
  interval: MaybeRef<number>, // 时间
  options: {
    immediate?: boolean
  } = {}
) {
  const { immediate = true } = options

  const isPending = ref(false);

  let timer: number | null;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function stop() {
    isPending.value = false;
    clear();
  }

  function start(...args: any[]) {
    // 清除上一次定时器
    clear();
    // 是否在pending 状态
    isPending.value = true;
    // 重新启动定时器
    timer = setTimeout(() => {
      // 当定时器执行的时候结束pending状态
      isPending.value = false;
      // 初始化定时器的id
      timer = null;
      // 执行回调
      cb(...args);
    }, unref(interval));
  }

  if (immediate) {
    isPending.value = true;
    start();
  }

  return {
    isPending: readonly(isPending),
    start,
    stop,
  };
}
