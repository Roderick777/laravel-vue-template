<template>
        <li>
            <a class="uk-accordion-title" href="#">{{ titulo }}</a>
            <div class="uk-accordion-content">
                <slot />
            </div>
        </li>
</template>

<script>
export default {
    props: {
        titulo: String,
    }
}
</script>