<!--<tamplate>
	<div>
		oi
		<img class="imagem-responsiva" :src="url" :alt="titulo">
	</div>
</tamplate>

<script>
export default {
  props: ['url', 'titulo'],
};
</script>

<style scoped> 
.imagem-responsiva{
  width: 100%;
}
</style>
-->

<template>
    <img class="imagem-responsiva" :src="url" :alt="titulo">
</template>
<script>
export default {
  props: ['url', 'titulo'],
};
</script>
<style scoped>
.imagem-responsiva {
	width: 100%;
    }
</style>
