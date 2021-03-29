<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* basic form styles */
    @layer base {
        [type='text'],
        [type='email'],
        [type='url'],
        [type='password'],
        [type='number'],
        [type='date'],
        [type='datetime-local'],
        [type='month'],
        [type='search'],
        [type='tel'],
        [type='time'],
        [type='week'],
        [multiple],
        textarea,
        select {
            @apply w-full border-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400;
        }
    }

    body {
        height: 100vh;
    }
</style>
