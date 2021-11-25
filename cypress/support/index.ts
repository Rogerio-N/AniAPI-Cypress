declare namespace Cypress{
    interface Chainable{
        /**
         * Command used to make a request to an auth endpoint
         * @example verifyToken(token)
         */
        verifyToken(token: string): void
    }
}