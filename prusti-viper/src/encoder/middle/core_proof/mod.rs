mod addresses;
mod adts;
mod block_markers;
mod builtin_methods;
mod compute_address;
mod errors;
mod fold_unfold;
mod function_gas;
mod interface;
mod into_low;
mod lifetimes;
mod lowerer;
mod places;
mod predicates;
mod references;
mod snapshots;
mod type_layouts;
mod types;
mod utils;

pub(crate) use self::interface::{MidCoreProofEncoderInterface, MidCoreProofEncoderState};