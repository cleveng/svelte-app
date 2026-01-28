<script lang="ts">
  import { resolve } from '$app/paths'
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <div class="flex flex-col items-center justify-center text-sm max-md:px-4">
    <h1 class="text-8xl font-bold text-indigo-500 md:text-9xl">404</h1>
    <div class="my-5 h-1 w-16 rounded bg-indigo-500 md:my-7"></div>
    <p class="text-2xl font-bold text-gray-800 md:text-3xl">页面未找到</p>
    <p class="mt-4 max-w-md text-center text-sm text-gray-500 md:text-base">
      您正在查找的页面可能已被删除、名称已更改，或者暂时无法访问。
    </p>
    <div class="mt-6 flex items-center gap-4">
      <a
        href={resolve('/')}
        class="rounded-md bg-gray-800 px-7 py-2.5 text-white transition-all hover:bg-black active:scale-95"
      >
        返回首页
      </a>
      <a
        href={resolve('/')}
        class="rounded-md border border-gray-300 px-7 py-2.5 text-gray-800 transition-all active:scale-95"
      >
        联系客服
      </a>
    </div>
  </div>
</div>
