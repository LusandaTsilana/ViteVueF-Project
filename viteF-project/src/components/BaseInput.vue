<template>
    <div class="input-wrap">
        <label> {{ label }}</label>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"/>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        default: "",
    }
});

</script>

<style scoped>
.input-wrap{
    display: flex;
    flex-direction: column;

}

input {
    padding: 8px 12px;
}
</style>