import SignUpPage from './SignUpPage.vue';
import {render, screen} from '@testing-library/vue';
import '@testing-library/jest-dom'


describe("Sign Up Page", () => {
    describe("Layout", () => {
        it("has Sign Up header", () => {
            render(SignUpPage);
            const header = screen.queryByRole('heading', {name: 'Sign Up'});
            expect(header).toBeInTheDocument();
        });
        it("has username input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Username');
            expect(input).toBeInTheDocument();
        });
        it("has email input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Email');
            expect(input).toBeInTheDocument();
        });
        it("has password input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Password');
            expect(input).toBeInTheDocument();
        });
        it("has password type for password input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Password');
            expect(input.type).toBe("password");
        });
    });
});