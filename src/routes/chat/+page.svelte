<script>
    import ElizaBot from 'elizabot';
    import { writable } from 'svelte/store';
    import { enhance } from "$app/forms";

    // Skapa ElizaBot-instans
    const eliza = new ElizaBot();

    import { onMount } from 'svelte';

    var savedChat = [];

    onMount(() => {
        savedChat = JSON.parse(localStorage.getItem('chat')) || [
        { user: 'Eliza', message: eliza.getInitial() }
        ];

        $chat = savedChat;

        console.log(savedChat);

        chat.subscribe(value => {
        localStorage.setItem('chat', JSON.stringify(value));
    });
    });

    export let chat = writable(savedChat);
    export let visible = writable(false);

    async function write(message) {
        if (!message) return;

        // Visa "typing bubble"
        visible.set(true);

        // Lägg till användarens meddelande
        chat.update(messages => [...messages, { user: 'User', message }]);

        // Vänta innan Eliza svarar
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

        // Lägg till Elizas svar
        chat.update(messages => [...messages, { user: 'Eliza', message: eliza.transform(message) }]);

        // Dölj "typing bubble"
        visible.set(false);
    }
</script>

<main>
    <section>
        {#each $chat as message}
            <article class={message.user}>
                <p>{message.message}</p>
            </article>
        {/each}

        {#if $visible}
            <article id="visible">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </article>
        {/if}
    </section>

    <form method="post" use:enhance={({ formElement, formData, cancel }) => {
        cancel();
        const text = formData.get("text");
        write(text);
        formElement.reset();
    }}>
        <input type="text" name="text" placeholder="Skriv ett meddelande" required />
        <button type="submit" id="submit">Skicka</button>
    </form>
    <button type="button" id="clear" on:click={() => chat.set([])}>Rensa chatten</button>
</main>


<style>
    main {
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 60vw;
        min-width: 400px;
        min-height: 200px;
        height: 70vh;
        margin: 0 auto;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    section {
        flex-grow: 1;
        overflow-y: scroll;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    article {
        padding: 10px;
        border-radius: 10px;
        width: fit-content;
        max-width: 70%;
    }

    article.User {
        background-color: #f8d7da;
        align-self: flex-end;
        color: black;
    }

    article.Eliza {
        background-color: #caa4fc;
        align-self: flex-start;
        color: black;
    }

    #visible {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 60px;
    }

    .circle {
        width: 10px;
        height: 10px;
        background-color: #caa4fc;
        border-radius: 50%;
        margin: 0 5px;
        animation: typing 1s infinite;
    }

    .circle:nth-child(1) {
        animation-delay: 0ms;
    }

    .circle:nth-child(2) {
        animation-delay: 333ms;
    }

    .circle:nth-child(3) {
        animation-delay: 666ms;
    }

    @keyframes typing {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.4);
        }
    }

    form {
        display: flex;
        gap: 10px;
    }

    input {
        flex-grow: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        color: black;
    }

    #submit {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    #clear {
        padding-top: 10px;
        color:black;
    }
</style>
