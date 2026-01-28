<script lang="ts">
  import { resolve } from '$app/paths'
</script>

<main class="flex h-screen w-full items-center justify-center px-4">
  <form class="flex w-80 flex-col md:w-full md:max-w-96">
    <a href={resolve('/')} class="mb-8" title="Go to PrebuiltUI">
      <svg class="size-10" width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m8 4.55 6.75 3.884 6.75-3.885M8 27.83v-7.755L1.25 16.19m27 0-6.75 3.885v7.754M1.655 8.658l13.095 7.546 13.095-7.546M14.75 31.25V16.189m13.5 5.976V10.212a2.98 2.98 0 0 0-1.5-2.585L16.25 1.65a3.01 3.01 0 0 0-3 0L2.75 7.627a3 3 0 0 0-1.5 2.585v11.953a2.98 2.98 0 0 0 1.5 2.585l10.5 5.977a3.01 3.01 0 0 0 3 0l10.5-5.977a3 3 0 0 0 1.5-2.585"
          stroke="#1d293d"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>

    <h2 class="text-4xl font-medium text-gray-900">注 册</h2>

    <p class="mt-4 text-base text-gray-500/90">请输入电子邮件和密码以进行注册。</p>

    <div class="mt-10">
      <label class="font-medium" for="">邮箱</label>
      <input
        placeholder="请输入您的电子邮件...."
        class="mt-2 w-full rounded-md px-3 py-3 ring ring-gray-200 outline-none focus:ring-2 focus:ring-indigo-600"
        required
        type="email"
        name="email"
      />
    </div>

    <div class="mt-6">
      <label class="font-medium" for="">密码</label>
      <input
        placeholder="请输入您的密码...."
        class="mt-2 w-full rounded-md px-3 py-3 ring ring-gray-200 outline-none focus:ring-2 focus:ring-indigo-600"
        required
        type="password"
        name="password"
      />
    </div>

    <button
      type="submit"
      class="mt-8 w-full cursor-pointer rounded-md bg-indigo-500 py-3 text-white transition hover:opacity-90"
    >
      注 册
    </button>
    <p class="py-8 text-center text-sm text-gray-500/90">
      已有账号? 前往<a href={resolve('/signin')} class="text-indigo-400 hover:underline">登录</a>
    </p>
  </form>
</main>
