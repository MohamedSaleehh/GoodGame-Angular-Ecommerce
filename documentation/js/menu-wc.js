'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">good-game-angular-ecommerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-11df58bddf6057c79572840583a8e9b75a2971ba930640e42b227cfd98da37e61985262a342340d01eb4d1f1deb8d9f1c2ae3319c4ae5ca69791a83e183fb53c"' : 'data-target="#xs-components-links-module-AppModule-11df58bddf6057c79572840583a8e9b75a2971ba930640e42b227cfd98da37e61985262a342340d01eb4d1f1deb8d9f1c2ae3319c4ae5ca69791a83e183fb53c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-11df58bddf6057c79572840583a8e9b75a2971ba930640e42b227cfd98da37e61985262a342340d01eb4d1f1deb8d9f1c2ae3319c4ae5ca69791a83e183fb53c"' :
                                            'id="xs-components-links-module-AppModule-11df58bddf6057c79572840583a8e9b75a2971ba930640e42b227cfd98da37e61985262a342340d01eb4d1f1deb8d9f1c2ae3319c4ae5ca69791a83e183fb53c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatbotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatbotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-e5e005b5003275d893eb241b4ad6b85b02014ab39c8b746eb25ff50c0d0d3b9eaaad2256c459ee8d24aa0d15fca2fbd65d62a1affd3cb4c11ec24ab7130bc89a"' : 'data-target="#xs-components-links-module-AuthModule-e5e005b5003275d893eb241b4ad6b85b02014ab39c8b746eb25ff50c0d0d3b9eaaad2256c459ee8d24aa0d15fca2fbd65d62a1affd3cb4c11ec24ab7130bc89a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-e5e005b5003275d893eb241b4ad6b85b02014ab39c8b746eb25ff50c0d0d3b9eaaad2256c459ee8d24aa0d15fca2fbd65d62a1affd3cb4c11ec24ab7130bc89a"' :
                                            'id="xs-components-links-module-AuthModule-e5e005b5003275d893eb241b4ad6b85b02014ab39c8b746eb25ff50c0d0d3b9eaaad2256c459ee8d24aa0d15fca2fbd65d62a1affd3cb4c11ec24ab7130bc89a"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-fd468339e696c97d398208a418ed995c737e85f34685c10e0b13cbd6258ff8091733701f6c8558c451d8fdd4f7b7cce835855415f0a22e63df356db68422c761"' : 'data-target="#xs-components-links-module-ComponentsModule-fd468339e696c97d398208a418ed995c737e85f34685c10e0b13cbd6258ff8091733701f6c8558c451d8fdd4f7b7cce835855415f0a22e63df356db68422c761"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-fd468339e696c97d398208a418ed995c737e85f34685c10e0b13cbd6258ff8091733701f6c8558c451d8fdd4f7b7cce835855415f0a22e63df356db68422c761"' :
                                            'id="xs-components-links-module-ComponentsModule-fd468339e696c97d398208a418ed995c737e85f34685c10e0b13cbd6258ff8091733701f6c8558c451d8fdd4f7b7cce835855415f0a22e63df356db68422c761"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsRoutingModule.html" data-type="entity-link" >ComponentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-9db6294691a9374e5fe4940832c4e64303f2be3078d08025c6d7d8a786bdd877df9baaff3fa725b15e53c7659560633175d3d7931bea1564d7e4df5aaac64a57"' : 'data-target="#xs-components-links-module-HomeModule-9db6294691a9374e5fe4940832c4e64303f2be3078d08025c6d7d8a786bdd877df9baaff3fa725b15e53c7659560633175d3d7931bea1564d7e4df5aaac64a57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-9db6294691a9374e5fe4940832c4e64303f2be3078d08025c6d7d8a786bdd877df9baaff3fa725b15e53c7659560633175d3d7931bea1564d7e4df5aaac64a57"' :
                                            'id="xs-components-links-module-HomeModule-9db6294691a9374e5fe4940832c4e64303f2be3078d08025c6d7d8a786bdd877df9baaff3fa725b15e53c7659560633175d3d7931bea1564d7e4df5aaac64a57"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShopModule.html" data-type="entity-link" >ShopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' : 'data-target="#xs-components-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' :
                                            'id="xs-components-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WishListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WishListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' : 'data-target="#xs-pipes-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' :
                                            'id="xs-pipes-links-module-ShopModule-354b840daf603e300adb830177400b72ed7641bfea7e53dc01bbb7078a8ca72cfe278dabb9fd38b525611961cc84da8fb81bc9b700e4c3a5fbdce6c5a682432d"' }>
                                            <li class="link">
                                                <a href="pipes/CatPipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatPipePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EURToEGPPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EURToEGPPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FreePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FreePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/StockPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StockPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShopRoutingModule.html" data-type="entity-link" >ShopRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StaticModule.html" data-type="entity-link" >StaticModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StaticModule-ad66df0e7e6a1474bb0ee0e23fddff915a1e786f12e9f75c1e36f514d492af0cc9c90e8121492fb5f2de6fe87c45cdc5bb163a8c4b35709370f90b573bf51fe6"' : 'data-target="#xs-components-links-module-StaticModule-ad66df0e7e6a1474bb0ee0e23fddff915a1e786f12e9f75c1e36f514d492af0cc9c90e8121492fb5f2de6fe87c45cdc5bb163a8c4b35709370f90b573bf51fe6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StaticModule-ad66df0e7e6a1474bb0ee0e23fddff915a1e786f12e9f75c1e36f514d492af0cc9c90e8121492fb5f2de6fe87c45cdc5bb163a8c4b35709370f90b573bf51fe6"' :
                                            'id="xs-components-links-module-StaticModule-ad66df0e7e6a1474bb0ee0e23fddff915a1e786f12e9f75c1e36f514d492af0cc9c90e8121492fb5f2de6fe87c45cdc5bb163a8c4b35709370f90b573bf51fe6"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExploreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestimonialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestimonialComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StaticRoutingModule.html" data-type="entity-link" >StaticRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyServiceService.html" data-type="entity-link" >CurrencyServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImagesService.html" data-type="entity-link" >ImagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchServiceService.html" data-type="entity-link" >SearchServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WishListService.html" data-type="entity-link" >WishListService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoggedinGuard.html" data-type="entity-link" >LoggedinGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Image.html" data-type="entity-link" >Image</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/TestPipePipe.html" data-type="entity-link" >TestPipePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});