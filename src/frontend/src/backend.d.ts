import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllSubmissionsByEmail(): Promise<Array<Submission>>;
    getSubmission(id: string): Promise<Submission>;
    submitContactForm(name: string, email: string, subject: string, message: string): Promise<void>;
}
