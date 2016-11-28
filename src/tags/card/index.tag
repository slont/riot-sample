require('./card_title');

<card>
	<div class="card sticky-action">
		<div class="card-image waves-effect waves-block waves-light">
			<img class="activator" src="http://materializecss.com/images/office.jpg">
		</div>
		<div class="card-content">
			<card-title title="Title" subtitle="Sub Title"></card-title>
			<p><a href="#!">This is a link</a></p>
		</div>

		<div class="card-action">
			<a href="#">This is a link</a>
		</div>

		<div class="card-reveal">
			<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
			<p>Here is some more information about this product that is only revealed once clicked on.</p>
		</div>
	</div>

	<style type="scss">
		card {
			.card {
				.card-content {
					padding: 2rem;
				}
			}
		}
	</style>
</card>
