import { isNumber } from '@/utils/types'

/**
 * @description: 将类名转换为数组
 * @param cls 类名
 */
function classNameToArray(cls =  '') {
  return cls.split(' ').filter(item => !!item.trim())
}

/**
 * @description: 为元素添加类名
 * @param el 元素
 * @param cls 类名
 */
export function addClass(el: Element, cls: string) {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
}

/**
 * @description: 为元素去除类名
 * @param el 元素
 * @param cls 类名
 */
export function removeClass(el: Element, cls: string) {
  if (!el || !cls.trim()) return;
  el.classList.remove(...classNameToArray(cls));
}

/**
 * @description: 判断元素是否有某个类名
 * @param el 元素
 * @param cls 类名
 */
export function hasClass(el: Element, cls: string): boolean {
  if (!el || !cls) return false;
  cls.trim();
  if (cls.includes(" ")) throw new Error("className should not contain space.");
  return el.classList.contains(cls);
}

/**
 * @description: 添加单位
 * @param value 值
 * @param unit 单位
 */
export function addUnit(value: string | number, unit = 'px'): string {
  if (isNumber(value)) {
    return value + unit;
  }
  return value;
}
