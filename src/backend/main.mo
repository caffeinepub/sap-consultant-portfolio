import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  module Submission {
    public func compareByEmail(a : Submission, b : Submission) : Order.Order {
      Text.compare(a.email, b.email);
    };
  };

  var nextId : Nat = 0;
  let submissions = Map.empty<Text, Submission>();

  public shared func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    if (name == "" or email == "" or subject == "" or message == "") {
      Runtime.trap("All fields are required");
    };

    let submissionId = nextId.toText();
    nextId += 1;
    let submission = {
      name;
      email;
      subject;
      message;
    };
    submissions.add(submissionId, submission);
  };

  public query func getAllSubmissionsByEmail() : async [Submission] {
    submissions.values().toArray().sort(Submission.compareByEmail);
  };

  public query func getSubmission(id : Text) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found " # id) };
      case (?submission) { submission };
    };
  };
};
