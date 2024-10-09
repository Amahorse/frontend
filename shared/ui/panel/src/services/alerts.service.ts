import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { AlertsComponent } from '../components/alerts/alerts.component';

@Injectable({
    providedIn: 'root'
})
export class AlertsService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    addToast(message: string, type: string = 'danger' ): void {
        // Create a component reference from the component 
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(AlertsComponent)
            .create(this.injector);

        // Set the message
        componentRef.instance.message = message;

        componentRef.instance.type = type;

        // Attach the component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // Get DOM element from component
        const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;

        // Append to the body
        document.body.appendChild(domElem);

        // Optionally, remove the component after some time
        setTimeout(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, 600000); // Adjust the timeout as needed
    }
}