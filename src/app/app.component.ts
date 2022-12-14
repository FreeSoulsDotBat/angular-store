import { ProductState } from './store/product.state'
import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from './store/state'
import { NgForm } from '@angular/forms'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-store'
	counter$: Observable<number>
	products$: Observable<ProductState[]>
	selectedProduct: ProductState

	constructor(private store: Store<AppState>) {
		this.counter$ = store.select('counter')
		this.products$ = store.select('products')
	}

	generateId() {
		const id = Math.floor(10000 * Math.random())
		let results = []
		this.products$.subscribe(
			(data) => (results = data.filter((p) => p.id === id))
		)

		if (results.length > 0) {
			return this.generateId()
		} else {
			return id
		}
	}

	saveProduct(f: NgForm) {
		this.store.dispatch({
			type: 'INCREMENT'
		})

		this.store.dispatch({
			type: 'CREATE',
			payload: {
				name: f.value.name,
				id: this.generateId(),
				code: f.value.code
			}
		})
	}

	deleteProduct(id: number) {
		this.store.dispatch({
			type: 'DECREMENT'
		})

		this.store.dispatch({
			type: 'DELETE',
			payload: { id }
		})
	}

	selectProduct(product: ProductState) {
		this.selectedProduct = { ...product }
	}

	updateProduct() {
		this.store.dispatch({
			type: 'UPDATE',
			payload: this.selectedProduct
		})
		this.selectedProduct = null
	}
}
