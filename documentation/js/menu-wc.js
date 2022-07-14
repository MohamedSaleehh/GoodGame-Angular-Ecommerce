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
                                            'data-target="#components-links-module-AppModule-2257e14b76fc56a508466d18248d2108c543a174422d79f577bba6a6df8593f3f0589a26917929a0e533c9581a1cd2a7f8320ab298da9d3ee9a33f32683d68bb"' : 'data-target="#xs-components-links-module-AppModule-2257e14b76fc56a508466d18248d2108c543a174422d79f577bba6a6df8593f3f0589a26917929a0e533c9581a1cd2a7f8320ab298da9d3ee9a33f32683d68bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2257e14b76fc56a508466d18248d2108c543a174422d79f577bba6a6df8593f3f0589a26917929a0e533c9581a1cd2a7f8320ab298da9d3ee9a33f32683d68bb"' :
                                            'id="xs-components-links-module-AppModule-2257e14b76fc56a508466d18248d2108c543a174422d79f577bba6a6df8593f3f0589a26917929a0e533c9581a1cd2a7f8320ab298da9d3ee9a33f32683d68bb"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
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
                                            'data-target="#components-links-module-AuthModule-38cc04f8feca11d913868e25ef9c72b854653dd18307917e1c05920b5a1b5817c1f8c6fe3b51c141479daa88a8ceb3d1f75f04ff3987db45fab35afbd47e8125"' : 'data-target="#xs-components-links-module-AuthModule-38cc04f8feca11d913868e25ef9c72b854653dd18307917e1c05920b5a1b5817c1f8c6fe3b51c141479daa88a8ceb3d1f75f04ff3987db45fab35afbd47e8125"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-38cc04f8feca11d913868e25ef9c72b854653dd18307917e1c05920b5a1b5817c1f8c6fe3b51c141479daa88a8ceb3d1f75f04ff3987db45fab35afbd47e8125"' :
                                            'id="xs-components-links-module-AuthModule-38cc04f8feca11d913868e25ef9c72b854653dd18307917e1c05920b5a1b5817c1f8c6fe3b51c141479daa88a8ceb3d1f75f04ff3987db45fab35afbd47e8125"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
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
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-0232f2b9958fbef0235bbdcbbad836bf41711a2fa3b2d63339a464fd49c1a572fabc3daf565b0940298d01425dbfd2c905841c35ed7ed3eed48fa949c6bf0df5"' : 'data-target="#xs-components-links-module-HomeModule-0232f2b9958fbef0235bbdcbbad836bf41711a2fa3b2d63339a464fd49c1a572fabc3daf565b0940298d01425dbfd2c905841c35ed7ed3eed48fa949c6bf0df5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-0232f2b9958fbef0235bbdcbbad836bf41711a2fa3b2d63339a464fd49c1a572fabc3daf565b0940298d01425dbfd2c905841c35ed7ed3eed48fa949c6bf0df5"' :
                                            'id="xs-components-links-module-HomeModule-0232f2b9958fbef0235bbdcbbad836bf41711a2fa3b2d63339a464fd49c1a572fabc3daf565b0940298d01425dbfd2c905841c35ed7ed3eed48fa949c6bf0df5"' }>
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
                                            'data-target="#components-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' : 'data-target="#xs-components-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' :
                                            'id="xs-components-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' }>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
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
                                            'data-target="#pipes-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' : 'data-target="#xs-pipes-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' :
                                            'id="xs-pipes-links-module-ShopModule-a9e50ec38552c93641f7b24c63ce86801a856a3c0d69d29fa0c32972727121440daddd82f20ec575565ff76bc6190e060e2ae147b77be020e0a3b680c825e68b"' }>
                                            <li class="link">
                                                <a href="pipes/FreePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FreePipe</a>
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
                                            'data-target="#components-links-module-StaticModule-15f76bd1e9be5efe7dddc725b320256538e3ee2949bd289c629c114f71591fdf9132f163b008e4f4dd48c888a3c6660bf22fa4b6179bef5938a41a6d2a9c68fd"' : 'data-target="#xs-components-links-module-StaticModule-15f76bd1e9be5efe7dddc725b320256538e3ee2949bd289c629c114f71591fdf9132f163b008e4f4dd48c888a3c6660bf22fa4b6179bef5938a41a6d2a9c68fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StaticModule-15f76bd1e9be5efe7dddc725b320256538e3ee2949bd289c629c114f71591fdf9132f163b008e4f4dd48c888a3c6660bf22fa4b6179bef5938a41a6d2a9c68fd"' :
                                            'id="xs-components-links-module-StaticModule-15f76bd1e9be5efe7dddc725b320256538e3ee2949bd289c629c114f71591fdf9132f163b008e4f4dd48c888a3c6660bf22fa4b6179bef5938a41a6d2a9c68fd"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyComponent</a>
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